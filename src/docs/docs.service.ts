import { Inject, Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Repository } from 'typeorm';
import { Doc } from './entities/doc.entity';

@Injectable()
export class DocsService {
  constructor(
    @Inject('DOCS_REPOSITORY')
    private readonly docsRepository: Repository<Doc>,
  ) {}

  private readonly s3Client = new S3Client({
    region: process.env.AWS_S3_REGION,
  });

  async upload(fileName: string, file: Buffer) {
    return await this.s3Client.send(
      new PutObjectCommand({
        Bucket: 'documentos-cesarnarvaez24',
        Key: fileName,
        Body: file,
      }),
    );
  }
}
