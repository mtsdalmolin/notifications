import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

export function makeNotification(override: Partial<NotificationProps> = {}) {
  return new Notification({
    category: 'social',
    content: new Content('new friendship request'),
    recipientId: 'some-experimental-id',
    ...override,
  });
}
