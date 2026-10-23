import 'dotenv/config';

export const testData = {
  loginBaseUrl: process.env.LOGIN_BASE_URL ?? 'https://demoqa.com/books',
  booksBaseUrl: process.env.BOOKS_BASE_URL ?? 'https://demoqa.com/books',
  username: process.env.TEST_USERNAME ?? 'romendez',
  password: process.env.TEST_PASSWORD ?? 'SDKf!y!7wvNbSeW',
  existingBookTitle: process.env.EXISTING_BOOK_TITLE ?? 'Git Pocket Guide',
  nonexistentBookTitle: process.env.NONEXISTENT_BOOK_TITLE ?? 'This Book Should Not Exist 987654'
};
