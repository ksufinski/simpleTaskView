var backendMock = angular.module('backendMock', ['ardasApp','ngMockE2E']);
backendMock.run(function($httpBackend){

	var id, res;

	function getTaskByID(url){
		var tempArr = url.match(/[0-9]*/g);
		 id =  tempArr.find(function( el){
			if (Number(el))
			return el;
		});
		res = tasks.filter(function(task){
			return task.id == id;
		});
		return res;
	}

	var tasks = [
		{
			"id": 1,
			"name": "Today_task1",
			"creation_date": "2015­04­21T06:50:21",
			"due_date": "2015­04­22T23:59:00",
			"start_date": "2015­04­21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0
		},
		{
			"id": 11,
			"name": "Today_task11",
			"creation_date": "2015­04­21T06:50:21",
			"due_date": "2015­04­22T23:59:00",
			"start_date": "2015­04­21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0,
			"tags": [
				"meeting"
			]
		},
		{
			"id": 12,
			"name": "Today_task12",
			"creation_date": "2015­04­21T06:50:21",
			"due_date": "2015­04­22T23:59:00",
			"start_date": "2015­04­21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0
		},
		{
			"id": 13,     "name": "Today_task13",
			"creation_date": "2015­04­21T06:50:21",
			"due_date": "2015­04­22T23:59:00",
			"start_date": "2015­04­21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0
		},
		{
			"id": 14,
			"name": "Today_task14",
			"creation_date": "2015­04­21T06:50:21",
			"due_date": "2015­04­22T23:59:00",
			"start_date": "2015­04­21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0
		},
		{
			"id": 15,
			"name": "Today_task15",
			"creation_date": "2015­04­21T06:50:21",
			"due_date": "2015­04­22T23:59:00",
			"start_date": "2015­04­21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0
		},
		{
			"id": 16,
			"name": "Today_task16",
			"creation_date": "2015­04­21T06:50:21",
			"due_date": "2015­04­22T23:59:00",
			"start_date": "2015­04­21T00:00:01",
			"is_completed": false,
			"is_archived": false,     "estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0
		},
		{
			"id": 17,
			"name": "Today_task17",
			"creation_date": "2015­04­21T06:50:21",
			"due_date": "2015­04­22T23:59:00",
			"start_date": "2015­04­21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0
		},
		{
			"id": 18,
			"name": "Today_task18",
			"creation_date": "2015­04­21T06:50:21",
			"due_date": "2015­04­22T23:59:00",
			"start_date": "2015­04­21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0,
			"tags": [
				"Cerri",
				"task"
			]
		},
		{
			"id": 19,
			"name": "Today_task19",
			"creation_date": "2015­04­21T06:50:21",
			"due_date": "2015­04­22T23:59:00",
			"start_date": "2015­04­21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"is_high_priority": true,
			"estimated_effort": 5.5,     "actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0
		},
		{
			"id": 20,
			"name": "Today_task21",
			"creation_date": "2015­04­21T06:50:21",
			"due_date": "2015­04­22T23:59:00",
			"start_date": "2015­04­21T00:00:01",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.5,
			"actual_effort": 3.3,
			"physical_progress": 60,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0
		},
		{
			"id": 2,
			"name": "Today_task2",
			"creation_date": "2015­04­22T06:50:22",
			"due_date": "2015­04­22T00:00:00Z",
			"start_date": "2015­04­22T00:00:00Z",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 1.0,
			"actual_effort": 0.0,
			"physical_progress": 10,
			"obj_status": "active",
			"project_id": 1
		},
		{
			"id": 3,
			"name": "Upcoming_task",
			"creation_date": "2015­04­22T06:50:23",
			"due_date": "2015­04­29T06:50:29",
			"start_date": "2015­04­28T00:00:00",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.0,
			"actual_effort": 0.0,
			"physical_progress": 100,
			"obj_status": "active",
			"project_id": 1
		},
		{
			"id": 4,     "name": "Old_task",
			"creation_date": "2015­04­22T06:50:24",
			"due_date": "2015­04­22T06:50:30",
			"start_date": "2015­04­18T00:00:00",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.0,
			"actual_effort": 0.0,
			"physical_progress": 50,
			"obj_status": "active",
			"project_id": 3
		},
		{
			"id": 5,
			"name": "Future_task",
			"creation_date": "2015­04­22T06:50:25",
			"due_date": "2025­05­22T06:50:31",
			"start_date": "2025­05­18T00:00:00",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.0,
			"actual_effort": 0.0,
			"physical_progress": 0,
			"obj_status": "active",
			"project_id": 4
		},
		{
			"id": 6,
			"name": "Archived_task",
			"creation_date": "2015­04­20T06:50:26",
			"due_date": "2015­04­22T06:52:32",
			"start_date": "2015­04­22T00:00:00",
			"is_completed": true,
			"is_archived": true,
			"estimated_effort": 5.0,
			"actual_effort": 5.0,
			"physical_progress": 50,
			"obj_status": "active",
			"project_id": 6
		},
		{
			"id": 7,
			"name": "Trashed_task",
			"creation_date": "2015­04­19T06:50:27",
			"due_date": "2015­04­22T06:52:33",
			"start_date": "2015­04­22T00:00:00",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 23.0,
			"actual_effort": 15.0,
			"physical_progress": 50,     "obj_status": "trashed",
			"project_id": 5
		},
		{
			"id": 8,
			"name": "Deleted_task",
			"creation_date": "2015­04­18T06:50:28",
			"due_date": "2015­04­22T06:52:34",
			"start_date": "2015­04­22T00:00:00",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 10.0,
			"actual_effort": 1.0,
			"physical_progress": 50,
			"obj_status": "deleted",
			"project_id": 6
		},
		{
			"id": 21,
			"name": "Completed_task",
			"creation_date": "2015­05­22T00:00:00",
			"due_date": "2015­05­26T00:00:00",
			"start_date": "2015­05­25T00:00:00",
			"is_completed": true,
			"is_archived": true,
			"estimated_effort": 5.0,
			"actual_effort": 4.0,
			"physical_progress": 100,
			"obj_status": "active",
			"project_id": 6
		},
		{
			"id": 22,
			"name": "Future_task2",
			"creation_date": "2015­04­22T06:50:25",
			"due_date": "2025­05­22T06:50:31",
			"start_date": "2025­05­18T00:00:00",
			"is_completed": false,
			"is_archived": false,
			"estimated_effort": 5.0,
			"actual_effort": 0.0,
			"physical_progress": 0,
			"obj_status": "active",
			"project_id": 4
		},
		{
			"id": 23,
			"name": "Future_milestone",
			"creation_date": "2015­04­22T06:50:25",
			"due_date": "2025­07­10T00:00:00",
			"start_date": "2025­07­10T00:00:00",     "is_completed": false,
			"is_archived": false,
			"estimated_effort": 0.0,
			"actual_effort": 0.0,
			"physical_progress": 0,
			"obj_status": "active",
			"project_id": 4,
			"task_type": "milestone"
		},
		{
			"id": 24,
			"name": "Task_without_dates",
			"creation_date": "2015­06­26T06:50:21",
			"is_completed": false,
			"is_archived": false,
			"obj_status": "active",
			"description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
			"project_id": 0
		}
	];

	$httpBackend.whenGET('/tasks').respond(tasks);
	$httpBackend.whenPUT('/tasks/11/name').respond('s');

	$httpBackend.whenRoute( 'GET', '/tasks/:id').respond(function(method, url, data, headers, params){
	getTaskByID(url);

		return [ 200, {
			taskParams: res
		}];
	});

	$httpBackend.whenGET(/\bhtml\b/).passThrough();

});