import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  Clock, 
  DollarSign, 
  Plus, 
  BarChart3, 
  Settings 
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-700">
          Welcome back! Here&apos;s what&apos;s happening with your clinic today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Patients</dt>
                  <dd className="text-lg font-medium text-gray-900">1,234</dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Today&apos;s Appointments</dt>
                  <dd className="text-lg font-medium text-gray-900">28</dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Pending Appointments</dt>
                  <dd className="text-lg font-medium text-gray-900">12</dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Monthly Revenue</dt>
                  <dd className="text-lg font-medium text-gray-900">$45,678</dd>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'John Doe', time: '9:00 AM', type: 'Check-up', status: 'Confirmed' },
                { name: 'Jane Smith', time: '10:30 AM', type: 'Follow-up', status: 'Confirmed' },
                { name: 'Mike Johnson', time: '2:00 PM', type: 'Consultation', status: 'Pending' },
                { name: 'Sarah Wilson', time: '3:30 PM', type: 'Procedure', status: 'Confirmed' },
              ].map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{appointment.name}</p>
                    <p className="text-sm text-gray-500">{appointment.time} • {appointment.type}</p>
                  </div>
                  <Badge variant={appointment.status === 'Confirmed' ? 'default' : 'secondary'}>
                    {appointment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a href="/admin/patients/new">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Plus className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Add Patient</p>
                    <p className="text-sm text-gray-500">Register new patient</p>
                  </div>
                </a>
              </Button>

              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a href="/admin/appointments/new">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Schedule Appointment</p>
                    <p className="text-sm text-gray-500">Book new appointment</p>
                  </div>
                </a>
              </Button>

              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a href="/admin/reports">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">View Reports</p>
                    <p className="text-sm text-gray-500">Analytics & insights</p>
                  </div>
                </a>
              </Button>

              <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                <a href="/admin/settings">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <Settings className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Settings</p>
                    <p className="text-sm text-gray-500">Configure clinic</p>
                  </div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 