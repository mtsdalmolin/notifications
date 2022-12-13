import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get recipientId() {
    return this.props.recipientId;
  }

  public set recipientId(recipientId) {
    this.props.recipientId = recipientId;
  }

  public get content() {
    return this.props.content;
  }

  public set content(content) {
    this.props.content = content;
  }

  public get category() {
    return this.props.category;
  }

  public set category(category) {
    this.props.category = category;
  }

  public get readAt() {
    return this.props.readAt;
  }

  public set readAt(readAt) {
    this.props.readAt = readAt;
  }

  public get createdAt() {
    return this.props.createdAt;
  }
}
