/**************************************************************
 *	Ellipse curve
 **************************************************************/

THREE.EllipseCurve = function ( aX, aY, xRadius, yRadius,
							aStartAngle, aEndAngle,
							aClockwise ) {

	this.aX = aX;
	this.aY = aY;

	this.xRadius = xRadius;
	this.yRadius = yRadius;

	this.aStartAngle = aStartAngle;
	this.aEndAngle = aEndAngle;

	this.aClockwise = aClockwise;

};

THREE.EllipseCurve.prototype = Object.create( THREE.Curve.prototype );

THREE.EllipseCurve.prototype.getPoint = function ( t ) {

  var deltaAngle = this.aEndAngle - this.aStartAngle;

  if(deltaAngle < 0) {
    deltaAngle += Math.PI*2;
  }

  if(deltaAngle > Math.PI*2) {
    deltaAngle -= Math.PI*2;
  }

  if ( this.aClockwise ) {
    t = 1 - t;
    deltaAngle = Math.PI*2 - deltaAngle;
    var angle = this.aEndAngle + t * deltaAngle;
	}
  else {
    var angle = this.aStartAngle + t * deltaAngle;
  }

	var tx = this.aX + this.xRadius * Math.cos( angle );
	var ty = this.aY + this.yRadius * Math.sin( angle );

	return new THREE.Vector2( tx, ty );
};
