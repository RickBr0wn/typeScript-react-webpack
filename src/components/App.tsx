import * as React from 'react'

export interface HelloWorldProps {
  title: string
}

export default ({ title }: HelloWorldProps) => (
  <React.Fragment>
    <h1>{title}!</h1>
  </React.Fragment>
)
