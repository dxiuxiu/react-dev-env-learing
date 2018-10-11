import * as React from 'react'  

interface IProps {
    empty?: any
}

interface IState {
    test1?: string
    test2?: string
}
export default class Manager extends React.Component<IProps, IState> {
    constructor(props: IProps) {
      super(props)
    }
  
    render() {
        return (
            <div>
                可以使用基础ts语法和react了
            </div>
        )
    }
}