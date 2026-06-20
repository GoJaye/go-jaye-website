import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default async function Icon() {
  const logoPath = join(process.cwd(), 'public/images/jaye-logo.png');
  const logoData = await readFile(logoPath);
  const src = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F6F7F9',
        }}
      >
        <img
          src={src}
          alt=""
          width={380}
          height={110}
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { ...size },
  );
}
