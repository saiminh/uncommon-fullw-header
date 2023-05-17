import { useBlockProps } from '@wordpress/block-editor';
export default function save({ attributes }) {
	return (
		<h2 { ...useBlockProps.save({
      className: `uncommon-fullw-header ${attributes.layout}`,
    }) }>
			{ attributes.title }
		</h2>
	);
}
