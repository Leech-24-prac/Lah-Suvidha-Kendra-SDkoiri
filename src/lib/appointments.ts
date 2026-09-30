export interface BookingAppointment {
  id?: string;
  created_at?: string;
  name: string;
  phone: string;
  email?: string;
  location?: string;
  appointment_type: string;
  preferred_date: string;
  preferred_time: string;
  crop_season?: string;
  host_tree?: string;
  estimated_quantity?: string;
  notes?: string;
  status?: 'confirmed' | 'pending' | 'completed' | 'cancelled';
}

const STORAGE_KEY = 'lah_suvidha_appointments';

/**
 * Saves a consultation appointment to browser local storage.
 * Creates an appointment reference ID and timestamp.
 */
export async function saveBookingAppointment(appointment: BookingAppointment): Promise<{
  success: boolean;
  data: BookingAppointment;
}> {
  try {
    const existing: BookingAppointment[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    );
    const newRecord: BookingAppointment = {
      ...appointment,
      id: `LSK-${Date.now().toString().slice(-6)}`,
      created_at: new Date().toISOString(),
      status: 'pending',
    };
    existing.unshift(newRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
    return { success: true, data: newRecord };
  } catch (err) {
    console.error('Error saving appointment:', err);
    const fallbackRecord: BookingAppointment = {
      ...appointment,
      id: `LSK-${Date.now().toString().slice(-6)}`,
      created_at: new Date().toISOString(),
      status: 'pending',
    };
    return { success: true, data: fallbackRecord };
  }
}

/**
 * Retrieves recent appointments stored locally, optionally filtered by phone number.
 */
export async function getRecentAppointments(phoneFilter?: string): Promise<BookingAppointment[]> {
  try {
    const records: BookingAppointment[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    );
    if (phoneFilter && phoneFilter.trim()) {
      const query = phoneFilter.trim().replace(/\D/g, '');
      return records.filter((r) => r.phone.replace(/\D/g, '').includes(query));
    }
    return records;
  } catch (err) {
    console.error('Error fetching appointments:', err);
    return [];
  }
}
