import React from 'react';
import { Card, CardContent } from '@mui/material';

const StaffSection = ({ staffs }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Debug logging */}
      {console.log('Rendering staffs:', staffs)}

      {/* Add safety checks */}
      {Array.isArray(staffs) && staffs.length > 0 ? (
        staffs.map((member, index) => {
          // Debug each member
          console.log(`Rendering member ${index}:`, member);

          return (
            <Card key={member.id || index} className="transition-shadow shadow-lg hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name || 'Staff member'}
                  className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                  onError={(e) => {
                    console.error('Image failed to load:', member.image);
                    e.target.src = "/placeholder.svg";
                  }}
                  onLoad={() => console.log('Image loaded successfully:', member.image)}
                />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {member.name || 'Unknown'}
                </h3>
                <p className="mb-4 font-medium text-emerald-600">
                  {member.role || 'No role specified'}
                </p>
                <p className="text-sm text-gray-600">
                  {member.bio || 'No bio available'}
                </p>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <div className="col-span-full text-center text-gray-500">
          {staffs === undefined ? 'Loading staff...' : 'No staff members found'}
        </div>
      )}
    </div>
  );
};

export default StaffSection;
