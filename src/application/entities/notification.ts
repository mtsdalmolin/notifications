import { randomUUID } from 'crypto';
import { Replace } from '@helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
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

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt() {
    return this.props.createdAt;
  }

  public get createdAt() {
    return this.props.createdAt;
  }
}
