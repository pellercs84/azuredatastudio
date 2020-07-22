/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
* Decide if the given Python executable looks like the MacOS default Python.
*/
export function isMacDefaultPythonPath(pythonPath: string) {
	return pythonPath === 'python' || pythonPath === '/usr/bin/python';
}
