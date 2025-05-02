import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      const uri =
        process.env.MONGO_URL || 'mongodb://localhost:27017/quanlynhansu';
      try {
        const connection = await mongoose.connect(uri);
        // console.log('✅ MongoDB connected successfully');
        return connection;
      } catch (error) {
        // console.error('❌ MongoDB connection error:', error.message);
        throw error;
      }
    },
  },
];
