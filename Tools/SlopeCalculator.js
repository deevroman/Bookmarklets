javascript:alert("slope, slope intercept, point slope, and standard form finder. Notes: two - make a +");var x1=prompt('what is the x coordinate of the first point?%27);var y1=prompt(%27what is the y coordinate of the first point?%27);var x2=prompt(%27what is the x coordinate of the second point?%27);var y2=prompt(%27what is the y coordinate of the second point?%27);var st=y2-y1;var sb=x2-x1;alert(%27the slope of the line is %27+st+%27/%27+sb+%27.%27);alert(%27point slope form is y-%27+y1+%27=%27+st+%27/%27+sb+%27(x-%27+x1+%27)%27); var left=0;var right=st/sb*x1-y1;alert(%27the slope intercept form is y=%27+st+%27/%27+sb+%27x- %27+right+%27.%27);var e=st/sb;var l=e%1;(function() { if (e>0) {e=e*-1;if (l!=1) {e=e*sb;right=right*sb;alert("the standard form is - "+e+"x+"+sb+"y= - "+right+".");}}else if (l!=1){e=e*sb;right=right*sb;if (e>0){e=e*-1;}alert("the standard form is - "+e+"x+y="+right+".");}else {alert("the standard form is - "+e+"x+y="+right+".");}})();