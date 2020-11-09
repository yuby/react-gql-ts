import {
  Entity, ObjectIdColumn, Column, ObjectID,
  UpdateDateColumn, CreateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn({ unique: true, nullable: false })
  id?: ObjectID;

  @Column({ nullable: false })
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export interface Post {}
