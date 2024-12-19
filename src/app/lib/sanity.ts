import { createClient } from '@sanity/client'

const client = createClient({
  projectId: "pbg2oc94",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});

export default client

export async function getWebinarData() {
  const query = `*[_type == "webinar"]{
    _id,
    title,
    date,
    media[]{
      title,
      type,
      file{asset->},
      videoUrl
    }
  }`;
  return await client.fetch(query);
}

export async function getArchiveData() {
    const query = `*[_type == "archiveFile"]{
      year,
      "url": file.asset->url
    }`;
    return await client.fetch(query);
  }

export async function getIntroductionParagraph() {
  const query = `*[_type == "introductionParagraph"][0]{
    _id,
    title,
    text
  }`;
  return await client.fetch(query);
}
