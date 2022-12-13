import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('/notifications')
  list() {
    return this.prisma.notification.findMany();
  }

  @Post('/notifications')
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recipientId } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
