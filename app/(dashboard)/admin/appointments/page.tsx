import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AppointmentsPage() {
  const appointments = [
    { 
      id: 1, 
      patientName: 'John Doe', 
      patientEmail: 'john.doe@email.com',
      date: '2024-01-20', 
      time: '09:00 AM',
      type: 'Check-up',
      status: 'Confirmed',
      doctor: 'Dr. Smith'
    },
    { 
      id: 2, 
      patientName: 'Jane Smith', 
      patientEmail: 'jane.smith@email.com',
      date: '2024-01-20', 
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'Confirmed',
      doctor: 'Dr. Johnson'
    },
    { 
      id: 3, 
      patientName: 'Mike Johnson', 
      patientEmail: 'mike.johnson@email.com',
      date: '2024-01-20', 
      time: '02:00 PM',
      type: 'Consultation',
      status: 'Pending',
      doctor: 'Dr. Wilson'
    },
    { 
      id: 4, 
      patientName: 'Sarah Wilson', 
      patientEmail: 'sarah.wilson@email.com',
      date: '2024-01-21', 
      time: '11:00 AM',
      type: 'Procedure',
      status: 'Confirmed',
      doctor: 'Dr. Brown'
    },
    { 
      id: 5, 
      patientName: 'David Brown', 
      patientEmail: 'david.brown@email.com',
      date: '2024-01-21', 
      time: '03:30 PM',
      type: 'Check-up',
      status: 'Cancelled',
      doctor: 'Dr. Smith'
    },
  ];

  const getStatusVariant = (status: string): "default" | "secondary" | "destructive" => {
    switch (status) {
      case 'Confirmed':
        return 'default';
      case 'Pending':
        return 'secondary';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
            <p className="mt-2 text-sm text-gray-700">
              Manage and schedule patient appointments.
            </p>
          </div>
          <Button asChild>
            <a href="/admin/appointments/new">Schedule Appointment</a>
          </Button>
        </div>
      </div>

      {/* Calendar View Toggle */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Button>List View</Button>
              <Button variant="outline">Calendar View</Button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Today: {new Date().toLocaleDateString()}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Today</Button>
                <Button variant="outline" size="sm">Week</Button>
                <Button variant="outline" size="sm">Month</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                id="date"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="doctor">Doctor</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Doctors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                  <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
                  <SelectItem value="dr-wilson">Dr. Wilson</SelectItem>
                  <SelectItem value="dr-brown">Dr. Brown</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="check-up">Check-up</SelectItem>
                  <SelectItem value="follow-up">Follow-up</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="procedure">Procedure</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="w-full">
                Apply Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appointments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Appointment List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{appointment.patientName}</div>
                      <div className="text-sm text-gray-500">{appointment.patientEmail}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-900">
                      {new Date(appointment.date).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-500">{appointment.time}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {appointment.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-900">
                    {appointment.doctor}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(appointment.status)}>
                      {appointment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="link" size="sm" asChild>
                        <a href={`/admin/appointments/${appointment.id}`}>View</a>
                      </Button>
                      <Button variant="link" size="sm" asChild>
                        <a href={`/admin/appointments/${appointment.id}/edit`}>Edit</a>
                      </Button>
                      <Button variant="link" size="sm" className="text-red-600 hover:text-red-900">
                        Cancel
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
              <span className="font-medium">5</span> appointments
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 