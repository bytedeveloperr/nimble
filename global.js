import path from 'path';
import url from 'url';

global.use = async (filePath, rel = null) => {
	let exports;
	if (!rel) {
		exports = await import(filePath);
	} else {
		exports = await import(
			path.join(path.dirname(url.fileURLToPath(rel)), filePath)
		);
	}

	return exports.default || exports;
};
