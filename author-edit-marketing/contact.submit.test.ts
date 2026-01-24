import { describe, expect, it, vi, beforeEach } from 'vitest';
import { appRouter } from './routers';
import type { TrpcContext } from './_core/context';

// Mock the database and notification functions
vi.mock('./db', () => ({
  createContactSubmission: vi.fn(async (data) => ({
    id: 1,
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  })),
  getContactSubmissions: vi.fn(async () => []),
}));

vi.mock('./_core/notification', () => ({
  notifyOwner: vi.fn(async () => true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: 'https',
      headers: {},
    } as TrpcContext['req'],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext['res'],
  };
}

describe('contact.submit', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should successfully submit a contact form', async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: 'John Doe',
      email: 'john@example.com',
      genre: 'Fiction',
      wordCount: '50-80k',
      servicesNeeded: 'editing',
      deadline: '2026-03-01',
      message: 'I need help with my novel',
      manuscriptFileName: 'manuscript.docx',
    });

    expect(result).toEqual({ success: true, submissionId: 1 });
  });

  it('should reject submission without name', async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: '',
        email: 'john@example.com',
        genre: 'Fiction',
        servicesNeeded: 'editing',
      });
      expect.fail('Should have thrown an error');
    } catch (error: any) {
      expect(error.message).toContain('Name is required');
    }
  });

  it('should reject submission with invalid email', async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: 'John Doe',
        email: 'invalid-email',
        genre: 'Fiction',
        servicesNeeded: 'editing',
      });
      expect.fail('Should have thrown an error');
    } catch (error: any) {
      expect(error.message).toContain('Valid email is required');
    }
  });

  it('should reject submission without genre', async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: 'John Doe',
        email: 'john@example.com',
        genre: '',
        servicesNeeded: 'editing',
      });
      expect.fail('Should have thrown an error');
    } catch (error: any) {
      expect(error.message).toContain('Genre is required');
    }
  });

  it('should reject submission without services needed', async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submit({
        name: 'John Doe',
        email: 'john@example.com',
        genre: 'Fiction',
        servicesNeeded: '',
      });
      expect.fail('Should have thrown an error');
    } catch (error: any) {
      expect(error.message).toContain('Services needed is required');
    }
  });

  it('should accept optional fields', async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: 'Jane Doe',
      email: 'jane@example.com',
      genre: 'Non-Fiction',
      servicesNeeded: 'full-package',
    });

    expect(result).toEqual({ success: true, submissionId: 1 });
  });
});
