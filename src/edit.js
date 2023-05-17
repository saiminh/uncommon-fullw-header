import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	return (
		<div { ...useBlockProps({ 
      className: 'uncommon-fullw-header',
    }) }>
			<TextControl
        className='uncommon-fullw-header-text'
        label={__('Full width title')}
        value={ attributes.title }
        onChange={ ( title ) => setAttributes( { title } ) }
      />
      <InspectorControls key="setting">
        <div style={{
          padding: '1rem'
        }}>
          <SelectControl
            label="Layout"
            value={ attributes.layout }
            options={[
              { label: 'Normal', value: 'no-margin' },
              { label: 'negative bottom margin', value: 'negative-bottom-margin' },
            ]}
            onChange={ ( layout ) => setAttributes( { layout } ) }
          />
        </div>
      </InspectorControls>
		</div>
	);
}
