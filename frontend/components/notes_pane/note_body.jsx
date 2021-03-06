import React from 'react';
import { Link } from 'react-router-dom';
import { formatTime } from '../../utils/format_time';
import NoteOptions from './note_options';
import { withRouter } from 'react-router-dom'

class NoteBody extends React.Component {
  constructor(props){
    super(props);
  }


  firstImage(){
    const ops = JSON.parse(this.props.note.body).richText.ops
    for (let i = 0; i < ops.length; i++) {
      const image = ops[i].insert.image;
      if (image) return image;
    }
    return null;
  }


  thumbnail(image){
    if (!image) return null;
    return (
      <div style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginLeft:'14px',
          height:'100px',
          width:'100px',
          flexShrink:'0'
        }}><div className='image-screen'/></div>
    )
  }

  render(){
    const body = JSON.parse(this.props.note.body);
    const image = this.firstImage();

    return(
      <div className={`note-hover-event ${this.props.animate} ${this.props.active}`}>
      <Link to={`/home/${this.props.match.params.notebookId}/${this.props.note.id}`}>
        <div className="note-wrapper">
          <div className='note-body'>
            <div className='body-of-note'>
              <div className='body-left'>
                <p className='title'>{this.props.note.title || 'Untitled'}</p>
                <p className='date'>{formatTime(this.props.note.updated_at)}</p>
                <p>{body.plainText}</p>
              </div>
                {this.thumbnail(image)}
            </div>
          </div>
        </div>
      </Link>
      <NoteOptions
        note = {this.props.note}
        deleteNote = {this.props.deleteNote}
        updateNote = {this.props.updateNote}/>
    </div>
    );
  }
}

export default withRouter(NoteBody)
