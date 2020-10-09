import React from 'react'
/**
 * 加载器
 */
class MicroAppLoader extends React.Component {
  componentDidMount(){
    const { document, host, name } = this.props
    const scriptId = `micro-frontend-script-${name}`;
    if (document.getElementById(scriptId)) {
      this.renderMicroApp();
      return;
    }
    // 获取子项目的文件
    fetch(`${host}/asset-manifest.json`)
      .then((res)=>res.json())
      .then(manifest=>{
        const { files } = manifest
        const script = document.createElement('script')
        script.id = scriptId
        script.crossOrigin = '';
        script.src = `${host}${files['main.js']}`
        // 调用子应用的挂载方法
        script.onload = this.renderMicroApp
        document.body.appendChild(script)
    })
  }

  renderMicroApp = () =>{
    const { name, window, history } = this.props;
    // 子应用的script加载完毕后，会在window上挂载渲染方法
    const microAppRenderMethod = window[`render${name}`]
    if(microAppRenderMethod){
      microAppRenderMethod(`${name}-container`, history)
    }
  }


  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  render(){
    const { name } = this.props
    return (
      <main id={`${name}-container`}></main>
    )
  }
}

MicroAppLoader.defaultProps = {
  document,
  window,
};

export default MicroAppLoader