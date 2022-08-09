import React, { useEffect, useState } from 'react'

export const Alert = (props: any) => {
  const [alert, setAlert] = useState({
    background: `bg-green-900 text-center py-4 lg:px-4 
                  fixed bottom-[-10%] w-screen z-[-1]`,
    banner: `p-2 bg-green-600 items-center text-green-100,
                     leading-none lg:rounded-full flex lg:inline-flex`,
    pill: `flex rounded-full bg-green-400 uppercase 
                   px-2 py-1 text-xs font-bold mr-3`,
  })

  useEffect(() => {
    if (props.error.type === 'error') { 
        setAlert({
          background: `bg-red-800 text-center py-4 lg:px-4
                    fixed bottom-0 w-screen z-[-1] transition-all duration-500 ease-in`,
          banner: `p-2 bg-red-600 items-center text-red-100
                       leading-none lg:rounded-full flex lg:inline-flex`,
          pill: `flex rounded-full bg-red-400 uppercase 
                     px-2 py-1 text-xs font-bold mr-3`,
        })
      setTimeout(() => {
        setAlert({
          background: `bg-red-800 text-center py-4 lg:px-4
                      fixed bottom-[-10%] w-screen z-[-1] transition-all duration-500 ease-in`,
          banner: `p-2 bg-red-600 items-center text-red-100
                       leading-none lg:rounded-full flex lg:inline-flex`,
          pill: `flex rounded-full bg-red-400 uppercase 
                     px-2 py-1 text-xs font-bold mr-3`,
        })
      }, 5000);
    }
    if (props.error.type === 'success') {
      setAlert({
        background: `bg-blue-900 text-center py-4 lg:px-4
                    fixed bottom-0 w-screen z-[-1] transition-all duration-500 ease-in`,
        banner: `p-2 bg-blue-600 items-center text-blue-100
                     leading-none lg:rounded-full flex lg:inline-flex`,
        pill: `flex rounded-full bg-blue-400 uppercase 
                   px-2 py-1 text-xs font-bold mr-3`,
      })
      setTimeout(() => {
        setAlert({
          background: `bg-blue-900 text-center py-4 lg:px-4
                    fixed bottom-[-10%] w-screen z-[-1] transition-all duration-500 ease-in`,
        banner: `p-2 bg-blue-600 items-center text-blue-100
                     leading-none lg:rounded-full flex lg:inline-flex`,
        pill: `flex rounded-full bg-blue-400 uppercase 
                   px-2 py-1 text-xs font-bold mr-3`,
        })
      }, 1000);
    }
  }, [props.error])

  return (
    <div className={alert.background}>
      <div className={alert.banner}>
        <span className={alert.pill}>{props.error.type}</span>
        <span className="mr-2 flex-auto text-left font-semibold">
          {props.error.msg}
        </span>
        <svg className="h-4 w-4 fill-current opacity-75" viewBox="0 0 20 20">
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </div>
  )
  
}
