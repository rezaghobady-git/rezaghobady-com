import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Reza Ghobady',
        short_name: 'Reza',
        description: 'AI, Automation, and Art',
        start_url: '/QRCode', // Opens directly to your card
        display: 'standalone',
        background_color: '#1a1a1a',
        theme_color: '#1a1a1a',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable', // This lets Android clip the icon to its preferred shape
            },
        ],
    }
}