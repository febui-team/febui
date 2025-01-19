import React,{Component, ReactNode} from 'react'
import styles from './button.module.less'
type Props = {children: ReactNode}
export class Button extends Component<Props>{
  constructor(props: Props){
    super(props)
    console.log(styles.button);
    
  }
  render(){
    return <div className={styles.button}>{this.props.children}</div>;
  }
}