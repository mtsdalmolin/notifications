import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('a'.repeat(150)),
      category: 'social',
      recipientId: 'some-experimental-id',
    });

    expect(notification).toBeTruthy();
  });
});
