import React, { useEffect, useState } from 'react';
import SwaggerEditor, { plugins } from 'swagger-editor';
import './swagger-editor.css';

declare global {
  interface Window { editor: any; }
}

const Designer: React.Component = () => {
  useEffect(() => {
    window.editor = SwaggerEditor({
      dom_id: '#swagger-editor',
      layout: 'EditorLayout',
      plugins: Object.values(plugins),
      swagger2GeneratorUrl: 'https://generator.swagger.io/api/swagger.json',
      oas3GeneratorUrl: 'https://generator3.swagger.io/openapi.json',
      swagger2ConverterUrl: 'https://converter.swagger.io/api/convert',
    });
  }, []);

  const saveContent = () => {
    const swaggerDoc = window.localStorage.getItem('swagger-editor-content');
    console.log(swaggerDoc);
  }

  return (
    <div>
      <button onClick={() => saveContent()}>Save</button>
      <div id="swagger-editor">Designer</div>
    </div>
  );
};

export default Designer;