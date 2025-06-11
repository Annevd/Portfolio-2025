import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getCollection(collectionName) {
  const dir = `./src/content/${collectionName}`;
  const files = fs.readdirSync(dir);

  const items = files.map(filename => {
    const file = fs.readFileSync(path.join(dir, filename), 'utf-8');
    const { data, content } = matter(file);
    return { ...data, content };
  });

  // Sort by date descending, newest first
  items.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return items;
}