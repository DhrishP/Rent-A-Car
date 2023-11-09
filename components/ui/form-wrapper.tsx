import { ReactNode } from "react"

type FormWrapperProps = {
  title: string
  children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="text-center font-semibold mb-8 ">
        {title}
      </h2>
      <div
        className="flex flex-col space-y-4 w-[50vw] mx-auto"
      >
        {children}
      </div>
    </>
  )
}