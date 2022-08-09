import { getModelForClass, prop } from '@typegoose/typegoose';

export class Todo {
  @prop({
    type: String,
    required: true,
  })
  title: string;

  @prop({
    type: String,
    required: true,
  })
  shortId: string;

  @prop({
    type: Boolean,
    default: false,
  })
  complete: boolean;
}

export const TodoModel = getModelForClass(Todo, {
  schemaOptions: {
    timestamps: true,
  },
});
