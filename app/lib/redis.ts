import Redis from 'ioredis';

let redis: Redis | null = null;

export function getRedis() {
  if (!redis) {
    redis = new Redis({
      host: process.env.REDIS_HOST!,
      port: parseInt(process.env.REDIS_PORT!),
      username: process.env.REDIS_USERNAME,
      password: process.env.REDIS_PASSWORD,
      // Remove TLS completely to test
      lazyConnect: false,
      enableReadyCheck: true,
      connectTimeout: 10000,
      maxRetriesPerRequest: 3,
      retryStrategy: (times) => {
        if (times > 3) {
          console.error('Redis connection failed after 3 retries');
          return null;
        }
        return Math.min(times * 200, 1000);
      },
    });

    redis.on('error', (err) => {
      console.error('Redis connection error:', err);
    });

    redis.on('connect', () => {
      console.log('Redis connected successfully');
    });
  }
  return redis;
}

export default getRedis();