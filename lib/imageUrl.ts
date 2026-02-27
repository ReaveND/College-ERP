/**
 * Resolves an image field value to a displayable URL.
 *
 * - New records: image is already a full Cloudinary URL → use as-is.
 * - Old/legacy records: image is just a filename (e.g. "pfp.jpg") →
 *   fall back to the old Render server so existing data still shows.
 *
 * As users re-upload their photos through the edit form, the DB value
 * will be replaced with a Cloudinary URL and the legacy path is no longer used.
 */
const RENDER_BASE = 'https://college-erp-5cd2.onrender.com/Uploads';

export function resolveImageUrl(image: string | undefined | null): string {
    if (!image) return '';
    // Already an absolute URL (Cloudinary, or any other CDN)
    if (image.startsWith('http://') || image.startsWith('https://')) return image;
    // Legacy filename — try the old Render server as a fallback
    return `${RENDER_BASE}/${image}`;
}
