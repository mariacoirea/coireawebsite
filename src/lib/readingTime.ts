// Calculate reading time based on word count
export const calculateReadingTime = (text: string): number => {
  // Average reading speed: 200 words per minute
  const wordsPerMinute = 200;
  
  // Remove HTML tags and count words
  const cleanText = text.replace(/<[^>]*>/g, '');
  const wordCount = cleanText.trim().split(/\s+/).length;
  
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  // Minimum 1 minute reading time
  return Math.max(1, readingTime);
};

export const formatReadingTime = (minutes: number): string => {
  return `${minutes} min read`;
};