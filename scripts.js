function print(e, id) {
	document.getElementById(id).innerHTML = e;
}


function arrayStringBuilder(a) {
	var returnString = "";

	for (var i = 0; i < a.length; i++) {
		returnString += a[i] + " ";
	}

	return returnString;
}


function bubbleSort(a) {
	var pass   = 1;

	do {
		var swapped = false;
		for (var i = 0; i < a.length - pass; i++) {
			if (a[i] > a[i+1]) {
				var temp = a[i];
				a[i]     = a[i+1];
				a[i+1]   = temp;
				swapped  = true;
			}
			pass++;
		}
	} while (swapped);
}


function generateArray(n) {
	var a = [-1];

	for (var i = 0; i <= a.length; i++) {
		a[i] = parseInt(Math.random() * 100);
	}

	return a;
}

var nums = [1, 2, 3, 4, 5];
