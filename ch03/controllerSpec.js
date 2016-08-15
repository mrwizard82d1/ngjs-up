describe('Controller: ListCtrl', function() {
    // Instantiate a new version of the module before each test
    beforeEach(module('notesApp'));

    var ctrl;

    // Before each test, instantiate a new instance of the controller.
    beforeEach(inject(function($controller) {
        ctrl = $controller('ListCtrl');
    }));

    it('should have items available on load', function() {
        expect(ctrl.items).toEqual([
            {id: 1, label: 'First', done: true},
            {id: 2, label: 'Second', done: false}
        ]);
    });

    it('should have highlight items based on done: true', function() {
        var item = {id: 1, label: 'First', done: true};

        var actualClass = ctrl.getDoneClass(item);
        expect(actualClass.finished).toBeTruthy();
        expect(actualClass.unfinished).toBeFalsy();
    });

    it('should have highlight items based on done: false', function() {
        var item = {id: 1, label: 'First', done: false};

        var actualClass = ctrl.getDoneClass(item);
        expect(actualClass.finished).toBeFalsy();
        expect(actualClass.unfinished).toBeTruthy();
    });
});