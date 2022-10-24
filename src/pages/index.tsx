import * as React from "react"
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
    <h1 className="font-bold text-4xl">
      Welcome to SouthJam!
    </h1>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
