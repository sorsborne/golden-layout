// Author: Sharon
lm.container.ItemState = function( state ) {
	lm.utils.EventEmitter.call( this );

	// deep copy
	this._componentState = $.extend(true, {}, state);
	console.log("Golden intializing this._componentState to ", this._componentState);
};

lm.container.ItemState.prototype.getState = function() {
	return this._componentState;
}

lm.container.ItemState.prototype.extendState = function(state) {
	console.log("Golden: extending state from ",this.getState(), " with ", state);
	this.setState( $.extend( true, this.getState(), state ) );	
}

lm.container.ItemState.prototype.setState = function(state) {
	this._componentState = state;
}

