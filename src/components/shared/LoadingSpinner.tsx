export const LoadingSpinner = () => (
 <div
  style={{
   minHeight: '100vh',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   background: '#0d161c',
  }}
 >
  <div
   style={{
    width: 60,
    height: 60,
    border: '6px solid #7c2d12',
    borderTop: '6px solid #ea580c',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
   }}
  />
  <style>
   {`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}
  </style>
 </div>
);
