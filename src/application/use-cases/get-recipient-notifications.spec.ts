import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

const RECIPIENT_ID_1 = 'recipient-id-1';
const RECIPIENT_ID_2 = 'recipient-id-2';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: RECIPIENT_ID_1,
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: RECIPIENT_ID_1 }),
        expect.objectContaining({ recipientId: RECIPIENT_ID_1 }),
      ]),
    );
  });
});
