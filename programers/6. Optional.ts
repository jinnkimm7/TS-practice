/*
ES 2021에 추가된기능. 타입스크립트는 이미 있었음.
*/

interface Post {
  title: string,
  content: string,
}

interface ResponseData {
  post?: Post,
  message?: string,
  status: number,
}

const responses: ResponseData[] = [
  {
    post: {
      title: 'Hello',
      content: 'How are you doing?',
    },
    status: 200,
  },
  {
    message: 'Error',
    status: 500,
  },
];

responses[0].post?.title;
responses[1].post?.title; // 데이터가 없다면 자동으로 undefined를 반환한다.