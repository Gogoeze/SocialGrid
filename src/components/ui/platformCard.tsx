interface PlatformCardProps {
  name: string
  icon: string
  lastPost: string
  connected: boolean
  brandColor: string
  textColor?: string
  onQuickPost?: () => void
  onManage?: () => void
  onConnect?: () => void
}

export default function PlatformCard({
  name,
  icon,
  lastPost,
  connected,
  brandColor,
  textColor = 'white',
  onQuickPost,
  onManage,
  onConnect,
}: PlatformCardProps) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      border: '1px solid #ede8e3',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      transition: 'box-shadow 0.2s',
    }}>

      {/* Top row — icon + connected badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: brandColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}>
          <img
            src={`/${icon}`}
            alt={name}
            style={{ width: '100%', height: '100%', filter: textColor === 'white' ? 'invert(1) brightness(2)' : 'none', objectFit: 'contain' }}
          />
        </div>

        <span style={{
          fontSize: '11px',
          fontWeight: '500',
          padding: '4px 10px',
          borderRadius: '999px',
          backgroundColor: connected ? '#f0fdf4' : '#f5f0eb',
          color: connected ? '#16a34a' : '#9a8f8a',
        }}>
          {connected ? 'Connected' : 'Not connected'}
        </span>
      </div>

      {/* Platform name + last post */}
      <div>
        <h3 style={{ color: '#3a3330', fontWeight: '600', fontSize: '16px' }}>{name}</h3>
        <p style={{ fontSize: '12px', color: '#9a8f8a', marginTop: '4px' }}>Last post: {lastPost}</p>
      </div>

      {/* Quick Post button */}
      <button
        onClick={onQuickPost}
        style={{
          backgroundColor: brandColor,
          color: textColor,
          border: 'none',
          borderRadius: '8px',
          padding: '10px',
          fontSize: '13px',
          fontWeight: '500',
          cursor: 'pointer',
          marginTop: 'auto',
          width: '100%',
        }}
      >
        Quick Post
      </button>

      {/* Manage or Connect */}
      <button
        onClick={connected ? onManage : onConnect}
        style={{
          backgroundColor: 'transparent',
          color: '#c4a882',
          border: '1px solid #c4a882',
          borderRadius: '8px',
          padding: '8px',
          fontSize: '12px',
          fontWeight: '500',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        {connected ? 'Manage' : 'Connect'}
      </button>

    </div>
  )
}





// interface PlatformCardProps {
//   name: string
//   icon: string
//   lastPost: string
//   connected: boolean
//   brandColor: string
//   textColor?: string
//   className?: string // 👈 1. ADD THIS TO THE INTERFACE
//   onQuickPost?: () => void
//   onManage?: () => void
//   onConnect?: () => void
// }

// export default function PlatformCard({
//   name,
//   icon,
//   lastPost,
//   connected,
//   brandColor,
//   textColor = 'white',
//   className = '', // 👈 2. DESTRUCTURE AND DEFAULT TO EMPTY STRING
//   onQuickPost,
//   onManage,
//   onConnect,
// }: PlatformCardProps) {
//   return (
//     <div 
//       className={className} // 👈 3. INJECT THE TAILWIND CLASSNAME HERE
//       style={{
//         backgroundColor: 'white',
//         borderRadius: '16px',
//         border: '1px solid #ede8e3',
//         padding: '24px',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '16px',
//         boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
//         transition: 'box-shadow 0.2s',
//       }}
//     >

//       {/* Top row — icon + connected badge */}
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <div style={{
//           width: '48px',
//           height: '48px',
//           borderRadius: '12px',
//           backgroundColor: brandColor,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: '10px',
//         }}>
//           <img
//             src={`/${icon}`}
//             alt={name}
//             style={{ width: '100%', height: '100%', filter: textColor === 'white' ? 'invert(1) brightness(2)' : 'none', objectFit: 'contain' }}
//           />
//         </div>

//         <span style={{
//           fontSize: '11px',
//           fontWeight: '500',
//           padding: '4px 10px',
//           borderRadius: '999px',
//           backgroundColor: connected ? '#f0fdf4' : '#f5f0eb',
//           color: connected ? '#16a34a' : '#9a8f8a',
//         }}>
//           {connected ? 'Connected' : 'Not connected'}
//         </span>
//       </div>

//       {/* Platform name + last post */}
//       <div>
//         <h3 style={{ color: '#3a3330', fontWeight: '600', fontSize: '16px' }}>{name}</h3>
//         <p style={{ fontSize: '12px', color: '#9a8f8a', marginTop: '4px' }}>Last post: {lastPost}</p>
//       </div>

//       {/* Quick Post button */}
//       <button
//         onClick={onQuickPost}
//         style={{
//           backgroundColor: brandColor,
//           color: textColor,
//           border: 'none',
//           borderRadius: '8px',
//           padding: '10px',
//           fontSize: '13px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           marginTop: 'auto',
//           width: '100%',
//         }}
//       >
//         Quick Post
//       </button>

//       {/* Manage or Connect */}
//       <button
//         onClick={connected ? onManage : onConnect}
//         style={{
//           backgroundColor: 'transparent',
//           color: '#c4a882',
//           border: '1px solid #c4a882',
//           borderRadius: '8px',
//           padding: '8px',
//           fontSize: '12px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           width: '100%',
//         }}
//       >
//         {connected ? 'Manage' : 'Connect'}
//       </button>

//     </div>
//   )
// }
