export async function GET() {
  const key = process.env.PEXELS_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: 'Server missing PEXELS_KEY' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }

  const res = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=10', {
    headers: { Authorization: key },
  });

  if (!res.ok) {
    const details = await res.text().catch(() => '');
    return new Response(JSON.stringify({ error: 'Pexels fetch failed', details }), {
      status: res.status,
      headers: { 'content-type': 'application/json' },
    });
  }

  const data = await res.json();
  return new Response(JSON.stringify({ photos: data.photos.slice(0, 10) }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}