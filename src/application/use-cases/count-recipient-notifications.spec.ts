import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

const RECIPIENT_ID_1 = 'recipient-id-1';
const RECIPIENT_ID_2 = 'recipient-id-2';

describe('Count recipient notifications', () => {
  it('should be able to count a recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: RECIPIENT_ID_1 }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: RECIPIENT_ID_1 }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: RECIPIENT_ID_2 }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: RECIPIENT_ID_1,
    });

    expect(count).toEqual(2);
  });
});
