/*
 *	Takes an array a and sorts it in ascending order
 */
function bubbleSort(a) {
	var swapped = true;
	var j = 0;

	while (swapped) {
		swapped = false;
		j++;

		for (var i = 0; i < a.length; i++) {
			if (a[i] > a[i+1]) {
				var temp = a[i];
				a[i] 		 = a[i+1];
				a[i+1]	 = temp;
				swapped  = true;
			}
		}
	}
}

/*
 *	Creates an array of random integers from 0 - 99 of size
 *		specified by input n
 */
function generateArray(n) {
	var a = [-1];

	for (var i = 0; i <= n; i++) {
		a[i] = parseInt(Math.random() * 100);
	}

	return a;
}

/*
 *	Generates a sorted array of length specified by input n
 */
function genSortArray(n) {
	var arr = generateArray(n);
	bubbleSort(arr);
	return arr;
}

/*
 *	Takes an array a, and creates divs in the container id
 *		with the corresponding array values
 */
function parseArray(a) {
	for (var i = 0; i < a.length; i++) {
		var bdiv 		 	 = document.createElement("div");
		bdiv.className = "arrayElement";
		bdiv.id 			 = a[i];
		document.getElementById("container").appendChild(bdiv);
	}
}

/*
 *	Deletes any elements in the DOM with the class arrayElement
 */
function deletePriorArray() {
	var elements = document.getElementsByClassName("arrayElement");
	while(elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0]);
	}
}


function applyArrayCSS() {
	var elements = document.getElementsByClassName("arrayElement");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.height = elements[i].id + "px";
	}
}

/*
 *	Appends page with divs of an array
 */
function arrayDivMaker() {
	deletePriorArray();
	var arSize = document.getElementById("arraySize").value;
	var arr 	 = genSortArray(arSize);
	parseArray(arr);
	applyArrayCSS();
}
