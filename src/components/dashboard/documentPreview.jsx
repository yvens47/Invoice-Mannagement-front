import React from 'react';

function DocumentPreview(props) {
  console.log(props.src)
  https://invoice-mannagement.jeanpierre34.repl.co/uploads/file-1652023487912-30013395.pdf
	return (
		<div className="preview p-5" style={{width:'450px'}}>
      <iframe src={`${props.src}`} width="100%" height="500px"></iframe>
			
		</div>
	);
}

export default DocumentPreview;
