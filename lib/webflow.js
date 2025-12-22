// lib/webflow.js

const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_TOKEN;
const WEBFLOW_COLLECTION_ID = process.env.WEBFLOW_COLLECTION_ID;// Replace with actual Collection ID

export async function getCaseStudies() {
  if (!WEBFLOW_API_TOKEN) {
    throw new Error('Missing WEBFLOW_API_TOKEN in .env.local');
  }

  const url = `https://api.webflow.com/v2/collections/${WEBFLOW_COLLECTION_ID}/items/live`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${WEBFLOW_API_TOKEN}`,
    },
    // Cache settings: revalidate data every hour
    next: { revalidate: 3600 } 
  };

  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Webflow Fetch Error:", error);
    return [];
  }
}
export async function getCaseStudyBySlug(slug) {
  if (!WEBFLOW_API_TOKEN) throw new Error('Missing WEBFLOW_API_TOKEN');

  // 1. Fetch all live items first
  const allItems = await getCaseStudies();

  // 2. Find the one with the matching slug
  const item = allItems.find((i) => i.fieldData.slug === slug);
  
  return item || null;
}