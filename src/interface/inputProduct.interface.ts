export interface FeedbackInterface {
  idUser: string;
  fullName: string;
  image: string;
  comment: string;
}

export interface FeedbackListInterface {
  idProduct: string;
  feedback: FeedbackInterface[];
}
