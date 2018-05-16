import React from 'React'

import * as Maps from '../style_maps'
import ColorButton from './color';
import FontButton from './font';




const RadioPanelHelper =
({toggleProperty, editorState}) => ({component: Component, styleMap}) => {
  return Object.keys(styleMap).map(value => {
    return (
      <Component
        active={editorState.getCurrentInlineStyle().has(value)}
        onToggle={toggleProperty(styleMap)}
        style={value}
        key={value}/>
    );
  });
};




class ControlPanel extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const RadioPanel = RadioPanelHelper(this.props);
    return (
      <div className='editor-header'>
        <div className='control-panel'>


          <div className='font-tab'>Fonts
             <div className='font-popup'>
              <ul>
                <RadioPanel
                  component={FontButton}
                  styleMap={Maps.fontFamily}/>
              </ul>
            </div>
          </div>


          <div className='color-tab'>Colors
            <div className='color-popup'>
              <RadioPanel
                component={ColorButton}
                styleMap={Maps.color}/>
            </div>
          </div>

          <div className='size-tab'>Size
             <div className='size-popup'>
              <ul>
                <RadioPanel
                  component={FontButton}
                  styleMap={Maps.fontSize}/>
              </ul>
            </div>
          </div>

      </div>
    </div>
    );
  }
}


export default ControlPanel;
