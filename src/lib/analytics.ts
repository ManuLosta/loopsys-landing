// Lightweight Meta Pixel loader and trackers

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

let pixelInitialized = false

function loadScriptOnce(): void {
  if (document.getElementById('fb-pixel-script')) return
  const s = document.createElement('script')
  s.id = 'fb-pixel-script'
  s.async = true
  s.src = 'https://connect.facebook.net/en_US/fbevents.js'
  s.onload = () => {
    console.log('[Meta Pixel] fbevents.js loaded')
  }
  console.log('[Meta Pixel] Appending fbevents.js script tag')
  document.head.appendChild(s)
}

export function initMetaPixel(pixelId: string | undefined): void {
  console.log('[Meta Pixel] init called with', pixelId)
  if (!pixelId) {
    console.warn('[Meta Pixel] Missing VITE_META_PIXEL_ID, pixel not initialized')
    return
  }
  if (pixelInitialized) {
    console.log('[Meta Pixel] Already initialized, skipping')
    return
  }

  ;(function () {
    // fbq bootstrap - Meta Pixel initialization pattern
    const w = window as Window & { _fbq?: unknown; fbq?: unknown }
    if (w.fbq) return
    
    // Create fbq queue function
    const n: any = w._fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args)
    }
    
    // Initialize properties
    if (!n.queue) n.queue = []
    n.loaded = !0
    n.version = '2.0'
    
    w.fbq = n
  })()

  loadScriptOnce()
  window.fbq?.('init', pixelId)
  console.log('[Meta Pixel] fbq init done for', pixelId)
  pixelInitialized = true
}

export function trackMetaEvent(eventName: string, params?: Record<string, unknown>): void {
  console.log('[Meta Pixel] track', eventName, params || {})
  window.fbq?.('track', eventName, params || {})
}

const envPixelId = import.meta.env.VITE_META_PIXEL_ID
console.log('[Meta Pixel] Checking env var:', { 
  envPixelId, 
  type: typeof envPixelId,
  isString: typeof envPixelId === 'string',
  length: typeof envPixelId === 'string' ? envPixelId.length : 'N/A'
})
if (envPixelId) {
  initMetaPixel(envPixelId)
} else {
  console.warn('[Meta Pixel] VITE_META_PIXEL_ID not set; using no-op init')
}


